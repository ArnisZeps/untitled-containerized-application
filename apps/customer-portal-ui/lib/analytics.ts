import IBaseAnalyticsData from "@/interfaces/IBaseAnalyticsData"
import { analyticsEventTypes } from "./constants";

const analyticsServiceApi = process.env.NEXT_PUBLIC_ANALYTICS_SERVICE_API || "";

export const collectBaseAnalyticsData = async ({ cookies, headers }: IBaseAnalyticsData) => {
    const ipAddr = headers.get("x-forwarded-for") || "unknown";
    const deviceInfo = headers.get("user-agent") || "unknown";
    const url = headers.get("x-client-url") || "unknown";
    const clientId = cookies.get("clientId");
    const body = JSON.stringify({
        eventType: analyticsEventTypes.PAGE_VIEW,
        timestamp: new Date().toISOString(),
        data: {
            ipAddr,
            deviceInfo,
            clientId,
            url
        }

    })
    console.log(body)
    await fetch(`${analyticsServiceApi}/analytics/page-view`, { body, method: "POST", keepalive: true, headers: { "Content-Type": "application/json" } });
}