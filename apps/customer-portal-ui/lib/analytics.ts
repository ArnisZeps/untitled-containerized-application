import IClientAnalytics from '@/interfaces/IClientAnalytics';
import IServerAnalytics from "@/interfaces/IServerAnalytics";
import IAnalyticsHandler from '@/interfaces/IAnalyticsHandler';
import { EAnalyticsSource } from "./constants";
import { getCookie } from 'cookies-next/client';

const analyticsServiceApi = process.env.NEXT_PUBLIC_ANALYTICS_SERVICE_API || "";
const analyticsContainerName = process.env.ANALYTICS_CONTAINER_NAME || "";

export const sendAnalytics = async ({ source, logGroup, serverSource }: IAnalyticsHandler) => {
    switch (source) {
        case EAnalyticsSource.SERVER:
            if (!serverSource) return;
            const { headers, cookies } = serverSource;
            await sendServerAnalytics({ headers, cookies, logGroup })
            break;
        case EAnalyticsSource.CLIENT:
            await sendClientAnalytics({ logGroup })
            break;
    }
}

export const sendServerAnalytics = async ({ cookies, headers, logGroup }: IServerAnalytics) => {
    const ipAddr = headers.get("x-forwarded-for") || "unknown";
    const deviceInfo = headers.get("user-agent") || "unknown";
    const url = headers.get("x-client-url") || "unknown";
    const clientId = cookies.get("clientId")?.value;
    const body = JSON.stringify({
        logGroup: logGroup,
        timestamp: new Date().toISOString(),
        data: {
            ipAddr,
            deviceInfo,
            clientId,
            url
        }
    })
    console.log(analyticsContainerName)
    await fetch(`${analyticsContainerName}/analytics/logger-service`, { body, method: "POST", keepalive: true, headers: { "Content-Type": "application/json" } });
};

export const sendClientAnalytics = async ({ logGroup }: IClientAnalytics) => {
    const body = JSON.stringify({
        logGroup: logGroup,
        timestamp: new Date().toISOString(),
        data: {
            clientId: getCookie("clientId"),
            url: window.location.href,
            deviceInfo: navigator.userAgent
        },
    });
    await fetch(`${analyticsServiceApi}/analytics/logger-service`, {
        body,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "User-Agent": navigator.userAgent,
        },
    });
};
