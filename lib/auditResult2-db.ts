import { Audit } from "../models/auditResult2-db";
import connectDB from "./connect-db";
import { stringToObjectId } from "./utils";

interface AuditFilter {
  page?: number;
  limit?: number;
}

export async function getAudits(filter: AuditFilter = {}) {
  try {
    await connectDB();

    const page = filter.page ?? 1;
    const limit = filter.limit ?? 10;
    const skip = (page - 1) * limit;
    const audits = await Audit.find().skip(skip).limit(limit).lean().exec();
    const results = audits.length;

    return {
      audits: audits,
      page,
      limit,
      results,
    };
  } catch (error) {
    return { error };
  }
}

export async function createAudit(data: any) {
  try {
    await connectDB();

    const audit = await Audit.create(data);

    return {
      audit,
    };
  } catch (error) {
    return { error };
  }
}

export async function getAudit(id: string) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Audit not found" };
    }

    const audit = await Audit.findById(parsedId).lean().exec();
    if (audit) {
      return {
        audit,
      };
    } else {
      return { error: "Audit not found" };
    }
  } catch (error) {
    return { error };
  }
}

export async function updateAudit(
  id: string,
  data: any
) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Audit not found" };
    }

    const audit = await Audit.findByIdAndUpdate(
      parsedId,
      data,
      { new: true }
    )
      .lean()
      .exec();

    if (audit) {
      return {
        audit,
      };
    } else {
      return { error: "Audit not found" };
    }
  } catch (error) {
    return { error };
  }
}

export async function deleteAudit(id: string) {
  try {
    await connectDB();

    const parsedId = stringToObjectId(id);

    if (!parsedId) {
      return { error: "Audit not found" };
    }

    const audit = await Audit.findByIdAndDelete(parsedId).exec();

    if (audit) {
      return {};
    } else {
      return { error: "Audit not found" };
    }
  } catch (error) {
    return { error };
  }
}
