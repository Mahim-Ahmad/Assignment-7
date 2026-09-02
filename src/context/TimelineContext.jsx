import { createContext, useContext, useEffect, useState } from "react";

const TimelineContext = createContext(null);

const STORAGE_KEY = "keenkeeper_timeline_v2";

const seedTimeline = [
  { id: "t1", type: "meetup", friendId: 3, friendName: "Tanvir Ahmed", title: "Meetup with Tanvir Ahmed", date: "2026-03-29T10:00:00.000Z" },
  { id: "t2", type: "text", friendId: 2, friendName: "Nusrat Jahan", title: "Text with Nusrat Jahan", date: "2026-03-28T18:42:00.000Z" },
  { id: "t3", type: "meetup", friendId: 6, friendName: "Mim Akhter", title: "Meetup with Mim Akhter", date: "2026-03-26T09:00:00.000Z" },
  { id: "t4", type: "video", friendId: 4, friendName: "Farzana Akter", title: "Video with Farzana Akter", date: "2026-03-23T20:05:00.000Z" },
  { id: "t5", type: "meetup", friendId: 7, friendName: "Rakibul Islam", title: "Meetup with Rakibul Islam", date: "2026-03-21T15:00:00.000Z" },
  { id: "t6", type: "call", friendId: 5, friendName: "Shakil Rahman", title: "Call with Shakil Rahman", date: "2026-03-19T09:30:00.000Z" },
  { id: "t7", type: "meetup", friendId: 8, friendName: "Sadia Islam", title: "Meetup with Sadia Islam", date: "2026-03-17T14:10:00.000Z" },
  { id: "t8", type: "text", friendId: 4, friendName: "Farzana Akter", title: "Text with Farzana Akter", date: "2026-03-13T11:20:00.000Z" },
  { id: "t9", type: "call", friendId: 3, friendName: "Tanvir Ahmed", title: "Call with Tanvir Ahmed", date: "2026-03-11T16:00:00.000Z" },
  { id: "t10", type: "call", friendId: 2, friendName: "Nusrat Jahan", title: "Call with Nusrat Jahan", date: "2026-03-11T08:00:00.000Z" },
  { id: "t11", type: "video", friendId: 5, friendName: "Shakil Rahman", title: "Video with Shakil Rahman", date: "2026-03-06T19:00:00.000Z" },
  { id: "t12", type: "video", friendId: 1, friendName: "Arif Hossain", title: "Video with Arif Hossain", date: "2026-02-24T21:00:00.000Z" },
];

export function TimelineProvider({ children }) {
  const [entries, setEntries] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : seedTimeline;
    } catch {
      return seedTimeline;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      /* ignore write errors */
    }
  }, [entries]);

  const addEntry = (type, friend) => {
    const label = type === "call" ? "Call" : type === "text" ? "Text" : type === "video" ? "Video" : "Meetup";
    const entry = {
      id: `t_${Date.now()}`,
      type,
      friendId: friend.id,
      friendName: friend.name,
      title: `${label} with ${friend.name}`,
      date: new Date().toISOString(),
    };
    setEntries((prev) => [entry, ...prev]);
    return entry;
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const ctx = useContext(TimelineContext);
  if (!ctx) throw new Error("useTimeline must be used within TimelineProvider");
  return ctx;
}
