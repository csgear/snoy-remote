import React, { useEffect, useState } from "react";
import { Card, Spin, Alert } from "antd";
import { getSystemInformation } from "../api/sonyApi";

export default function SystemInfoCard() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getSystemInformation();
        setInfo(data);
      } catch (err) {
        setError("Failed to fetch system information");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Spin style={{ margin: 20 }} />;
  if (error) return <Alert type="error" message={error} showIcon />;

  return (
    <Card
      title="Sony TV System Information"
      style={{ maxWidth: 400, margin: "20px auto" }}
    >
      <p>
        <strong>Product:</strong> {info.product}
      </p>
      <p>
        <strong>Model:</strong> {info.model}
      </p>
      <p>
        <strong>Serial:</strong> {info.serial}
      </p>
      <p>
        <strong>OS Version:</strong> {info.osVersion}
      </p>
      <p>
        <strong>MAC Address:</strong> {info.macAddr}
      </p>
      <p>
        <strong>Language:</strong> {info.language}
      </p>
    </Card>
  );
}
