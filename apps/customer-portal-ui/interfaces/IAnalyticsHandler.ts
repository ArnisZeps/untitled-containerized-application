import { EAnalyticsSource, ELogGroups } from "@/lib/constants"
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers"
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"

interface IAnalyticsHandler {
    source: EAnalyticsSource,
    logGroup: ELogGroups,
    serverSource?: {
        headers: ReadonlyHeaders,
        cookies: ReadonlyRequestCookies
    }
}

export default IAnalyticsHandler

