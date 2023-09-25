import {
    ModelOptions,
    Severity,
    getModelForClass,
    index,
    post,
    prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@post<AuditClass>("save", function (doc) {
    if (doc) {
        doc.id = doc._id.toString();
        doc._id = doc.id;
    }
})

@post<AuditClass[]>(/^find/, function (docs) {
    // @ts-ignore
    if (this.op === "find") {
        docs.forEach((doc) => {
            doc.id = doc._id.toString();
            doc._id = doc.id;
        });
    }
})

@ModelOptions({
    schemaOptions: {
        timestamps: true,
        collection: "audits",
    },
    options: {
        allowMixed: Severity.ALLOW,
    },
})

@index({ date: 1 }) // ตั้งค่าดัชนีสำหรับวันที่
class AuditClass {
    @prop({ required: true })
    date: Date;

    @prop({ required: true })
    time: string;

    @prop({ required: true, type: () => [String] })
    safetyList: string[];

    @prop({ required: true })
    area: string;

    @prop({ required: true })
    auditType: string;

    @prop({ required: true })
    emailAddress: string;

    _id: mongoose.Types.ObjectId | string;

    id: string;
}

const Audit = getModelForClass(AuditClass);
export { Audit, AuditClass };
