'use client'
import { useEffect } from "react";
import AppTable from "../components/app.table";
import useSWR from "swr";

export default function Home() {

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  }

  )
  console.log(data);
  return (
    <div>
      <AppTable />
    </div>
  )
}
