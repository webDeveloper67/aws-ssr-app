import useSwr, { SWRConfig } from "swr";
import { server } from "../config";

const fetcher = (url) => fetch(url).then((res) => res.json());
const API = `${server}/api/helloworld`;

export async function getServerSideProps() {
  const textInfo = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: textInfo,
      },
    },
  };
}

function Index() {
  const { data, error } = useSwr(API);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((text, index) => {
        return (
          <ul style={{ listStyleType: "none" }} key={index}>
            <li>{`${text.temStr}`}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default function App({ fallback }) {
  return (
    <SWRConfig value={{ fallback }}>
      <Index />
    </SWRConfig>
  );
}
