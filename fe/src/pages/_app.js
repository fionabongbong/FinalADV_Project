import '@/styles/globals.css'
import axios from "axios"
import { SWRConfig } from "swr";
import { axiosAuthInstance } from "@/lib/axiosIntance";

const swrOptions = {
}

const fetcher = (resource, init) => axiosAuthInstance.get(resource, init).then(res => res.data);

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig value={{
      ...swrOptions,
      fetcher,
    }}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}
