import React from "react";
import Head from "next/head";
import Layout from "../src/components/common/Layout/Layout";
import Shared from "../src/components/Shared/Shared";
import { useGetUser } from "../src/hooks/useGetUser";

interface Profile {
  email: string;
  profileImageSource: string;
}

function SharedPage() {
  const { data } = useGetUser();
  const { email = "", profileImageSource = "" } = data || {};
  const profile: Profile = { email, profileImageSource };

  return (
    <>
      <Head>
        <title>Shared Page</title>
      </Head>
      <div className="App">
        <Layout isSticky={true} profile={profile}>
          <Shared />
        </Layout>
      </div>
    </>
  );
}

export default SharedPage;
