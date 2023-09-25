import { NextRequest, NextResponse } from "next/server";
import { getAudits, createAudit } from "../../../../lib/auditResult2-db";
import connectDB from "../../../../lib/connect-db";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const page_str = request.nextUrl.searchParams.get("page");
    const limit_str = request.nextUrl.searchParams.get("limit");

    const page = page_str ? parseInt(page_str, 10) : 1;
    const limit = limit_str ? parseInt(limit_str, 10) : 10;

    const { audits, results, error } = await getAudits({ page, limit });

    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      results,
      audits,
    };
    return NextResponse.json(json_response);
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { audit, error } = await createAudit(body);
    if (error) {
      throw error;
    }

    let json_response = {
      status: "success",
      data: {
        audit,
      },
    };
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
