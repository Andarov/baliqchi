import { query } from "firebase/database";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../api/firebase";

const LatestNews = () => {
  // get data
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const q = query(collection(db, "news"));
    onSnapshot(q, (querySnapshot) => {
      let newsArr = [];
      querySnapshot.forEach((doc) => {
        newsArr.push({ ...doc.data(), id: doc.id });
      });

      let sortedArr = newsArr.sort((a, b) => {
        const dateA = new Date(a.date.split(".").reverse().join("."));
        const dateB = new Date(b.date.split(".").reverse().join("."));
        return dateB - dateA;
      });

      setNews(sortedArr);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="py-16">
      <div className="container max-[500px]:px-0">
        <h2 className="mb-8 max-[500px]:px-5">So'nggi yangiliklar</h2>
        <ul className="grid grid-cols-3 gap-6 max-950:grid-cols-2 max-550:grid-cols-1 max-550:gap-10">
          {news &&
            news.map((item, index) => {
              return (
                index < 3 && (
                  <li key={item.id}>
                    <Link
                      key={item.id}
                      to={`/news/${item.id}`}
                      className="flex flex-col gap-y-4"
                    >
                      <img
                        className="w-full h-64 object-cover object-top rounded-lg bg-gray-400 max-700:h-52 max-550:h-64 max-[500px]:rounded-none"
                        src={item.images[0]}
                        alt={item.title}
                      />
                      <div className="space-y-3 max-[500px]:px-5">
                        <h3 className="text-xl font-semibold line-clamp-2">
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  </li>
                )
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default LatestNews;
