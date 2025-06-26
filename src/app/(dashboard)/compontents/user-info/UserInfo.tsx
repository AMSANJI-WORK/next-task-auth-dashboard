"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./UserInfo.module.scss";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/(application)/components/toast/Toast";
import AppLebelValue from "@/app/(application)/components/label-value/LabelValue";
import classNames from "classnames";
import Image from "next/image";

const DashboardUserInfo = () => {
  const router = useRouter();
  const { addToast } = useToast();

  const [data, setData] = useState<any>(null); // type `any` or use an appropriate interface
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const selected = localStorage.getItem("selected");
      if (!selected || selected === "{}") {
        localStorage.removeItem("selected");
        router.replace("/auth/login");
        addToast({ message: "No user exist !", type: "error" });
      } else {
        setData(JSON.parse(selected));
      }
      setLoading(false);
    }
  }, []);

  const fullname = useMemo(() => {
    if (!data) return "";
    return `${data.name?.title} . ${data.name?.first} ${data.name?.last}`;
  }, [data]);

  const birthdate = useMemo(() => data?.dob?.date?.split("T")[0], [data?.dob]);
  const address = useMemo(() => {
    if (!data?.location) return "";
    return `${data.location.city} , ${data.location.street.name} , ${data.location.street.number}`;
  }, [data?.location]);

  if (loading || !data) return null; // or show a loader

  return (
    <div className={classNames("container", styles.wrapper)}>
      <AppLebelValue label="" className="hidden hidden--lg" />
      <AppLebelValue label="" classNameValue={styles.imageContainer}>
        <Image
          alt={fullname}
          className={styles.image}
          src={data.picture?.large || "/placeholder.jpg"} // fallback for SSR
          width={100}
          height={100}
        />
      </AppLebelValue>
      <AppLebelValue label="" className="hidden hidden--sm" />
      <AppLebelValue label="full name">{fullname}</AppLebelValue>
      <AppLebelValue label="email">{data.email}</AppLebelValue>
      <AppLebelValue label="gender">{data.gender}</AppLebelValue>
      <AppLebelValue label="birth date">{birthdate}</AppLebelValue>
      <AppLebelValue label="age">{data.dob?.age}</AppLebelValue>
      <AppLebelValue label="cell">{data.cell}</AppLebelValue>
      <AppLebelValue label="phone">{data.phone}</AppLebelValue>
      <AppLebelValue label="country">{data.location?.country}</AppLebelValue>
      <AppLebelValue label="state">{data.location?.state}</AppLebelValue>
      <AppLebelValue label="address">{address}</AppLebelValue>
      <AppLebelValue label="postcode">{data.location?.postcode}</AppLebelValue>
      <AppLebelValue label="timezone">
        {data.location?.timezone?.description}
      </AppLebelValue>
    </div>
  );
};

export default DashboardUserInfo;
