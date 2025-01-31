import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

interface IBaseAnalyticsData {
    cookies: ReadonlyRequestCookies,
    headers: ReadonlyHeaders
}

export default IBaseAnalyticsData;