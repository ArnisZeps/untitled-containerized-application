"use client";
import IWebVitals from "@/interfaces/IWebVitals";
// import { useCookies } from 'next-client-cookies';
import { useReportWebVitals } from "next/web-vitals";
import { getCookie } from 'cookies-next/client';

const analyticsServiceApi = process.env.NEXT_PUBLIC_ANALYTICS_SERVICE_API || "";

const WebVitals =  ({ ipAddr }: IWebVitals) => {
  // const cookies = useCookies();
  const clientId =  getCookie("clientId");
  useReportWebVitals((metric) => {
    if (metric.name === "FCP") return
    const url = metric.entries[0].name;
    const body = JSON.stringify({ url, ipAddr, clientId });
    fetch(analyticsServiceApi, { body, method: "POST", keepalive: true });
    console.log(body);
  });

  return null;
};

export default WebVitals;
