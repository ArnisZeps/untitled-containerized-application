import IBaseAnalyticsData from "@/interfaces/IBaseAnalyticsData"
import { ELogGroups } from "./constants";

const analyticsServiceApi = process.env.NEXT_PUBLIC_ANALYTICS_SERVICE_API || "";

export const collectBaseAnalyticsData = async ({ cookies, headers }: IBaseAnalyticsData) => {
    const ipAddr = headers.get("x-forwarded-for") || "unknown";
    const deviceInfo = headers.get("user-agent") || "unknown";
    const url = headers.get("x-client-url") || "unknown";
    const clientId = cookies.get("clientId")?.value;
    const body = JSON.stringify({
        logGroup: ELogGroups.PAGE_VIEWS,
        timestamp: new Date().toISOString(),
        data: {
            ipAddr,
            deviceInfo,
            clientId,
            url
        }
    })
    console.log("API REQ", `${analyticsServiceApi}/analytics/logger-service`)
    await fetch(`${analyticsServiceApi}/analytics/logger-service`, { body, method: "POST", keepalive: true, headers: { "Content-Type": "application/json" } });
}