import Head from "next/head";
import Layout from "../src/components/common/Layout/Layout";
import { useGetUserById } from "../src/hooks/useGetUser";
import LinkBar from "../src/components/Folder/LinkBar/LinkBar";
import Folder from "../src/components/Folder/Folder";

interface Profile {
  email: string;
  profileImageSource: string;
}

export default function FolderPage() {
  const { data } = useGetUserById();
  const userData = data?.data[0];
  const { email, image_source } = userData || {};

  const profile: Profile | null = data
    ? { email, profileImageSource: image_source }
    : { email: "", profileImageSource: "" };

  return (
    <>
      <Head>
        <title>Folder Page</title>
      </Head>
      <div className="App">
        <Layout isSticky={false} profile={profile}>
          <LinkBar />
          <Folder />
        </Layout>
      </div>
    </>
  );
}
