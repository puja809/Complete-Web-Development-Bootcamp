import { Field } from "./field";
import { Record } from "./record";
import { Targetbucket } from "./targetbucket";

export class Datacluster {
    index_name: string;
    title: string;
    desc: string;
    created: string;
    updated: string;
    created_date: string;
    updated_date: string;
    active: string;
    visualizable: string;
    catalog_uuid: string;
    source: string;
    org_type: string;
    org: string[];
    sector: string[];
    field: Field[];
    target_bucket: Targetbucket;
    message: string;
    version: string;
    status: string;
    total: string;
    count: string;
    limit: string;
    offset: string;
    records: Record[];
}
