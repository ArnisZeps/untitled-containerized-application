import { ELogGroups } from "@/lib/constants";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

interface IServerAnalytics {
    cookies: ReadonlyRequestCookies,
    headers: ReadonlyHeaders,
    logGroup: ELogGroups,
}

export default IServerAnalytics;