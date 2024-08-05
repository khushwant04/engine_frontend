"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
  IconUpload,
  IconEdit,
  IconPencil,
  IconAdjustments,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Upload from "./Sections/upload";
import Annotate from "./Sections/Annotate";
import Edit from "./Sections/Edit";
import Augment from "./Sections/Augment";
import Dashboard from "./Sections/Dashboard";

export function SidebarDemo() {
  const [selectedSection, setSelectedSection] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Upload",
      href: "#",
      icon: (
        <IconUpload className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Annotate",
      href: "#",
      icon: (
        <IconPencil className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Edit",
      href: "#",
      icon: (
        <IconEdit className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Augment",
      href: "#",
      icon: (
        <IconAdjustments className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  onClick={() => setSelectedSection(link.label)}
                />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <ContentSection section={selectedSection} />
    </div>
  );
}

const ContentSection = ({ section }: { section: string }) => {
  switch (section) {
    case "Dashboard":
      return <Dashboard />;
    case "Upload":
      return <Upload />;
    case "Annotate":
      return <Annotate />;
    case "Edit":
      return <Edit />;
    case "Augment":
      return <Augment />;
    default:
      return <Dashboard />;
  }
};

