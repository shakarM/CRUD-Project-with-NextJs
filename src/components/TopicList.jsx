"use client";
import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const getTopics = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Fetching is the problem");
    }
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((data) => {
      if (data && data.topics) {
        setTopics(data.topics);
      }
    });
  }, []);

  return (
    <>
      {topics.map((topic) => (
        <div
          key={topic._id} // Assuming _id is unique for each topic
          className="flex border my-3 border-slate-200 justify-between items-start p-6"
        >
          <div className="text-lg">
            <h2 className="font-black text-slate-700">{topic.title}</h2>
            <p className="font-medium text-slate-500">{topic.description}</p>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={topic._id} />
            <Link href={`/editTopic/${topic._id}`}>
              <FaRegEdit size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;
