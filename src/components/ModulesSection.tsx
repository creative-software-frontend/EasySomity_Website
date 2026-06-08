'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineCube, HiOutlineTruck, HiOutlineUserGroup, HiOutlineLocationMarker,
  HiOutlineSwitchHorizontal, HiOutlineBadgeCheck, HiOutlineReceiptRefund,
  HiOutlineClock, HiOutlineAdjustments, HiOutlineUsers, HiOutlineOfficeBuilding,
  HiOutlineCog, HiOutlineCurrencyDollar, HiOutlineCalculator, HiOutlineChartPie,
  HiOutlineChartBar, HiOutlineChatAlt2, HiOutlineExclamationCircle, HiOutlineUserCircle
} from 'react-icons/hi';
import styles from './ModulesSection.module.css';

const ModulesSection = () => {
  const modules = [
    { title: 'সদস্য ব্যবস্থাপনা', icon: <HiOutlineCube />, desc: 'সদস্য নিবন্ধন ও তথ্য সংরক্ষণ, সদস্য তালিকা ও অনুসন্ধান সুবিধা' },
    { title: 'সঞ্চয় ব্যবস্থাপনা', icon: <HiOutlineTruck />, desc: 'দৈনিক/সাপ্তাহিক/মাসিক সঞ্চয় সংগ্রহ' },
    { title: 'ঋণ ব্যবস্থাপনা', icon: <HiOutlineLocationMarker />, desc: 'ঋণ আবেদন ও অনুমোদন' },
    { title: 'হিসাবরক্ষণ', icon: <HiOutlineBadgeCheck />, desc: 'ক্যাশ বুক, লেজার হিসাব, আয়-ব্যয় হিসাব, ব্যাংক লেনদেন ব্যবস্থাপনা' },
    { title: 'রসিদ ও ভাউচার', icon: <HiOutlineReceiptRefund />, desc: 'স্বয়ংক্রিয় রসিদ তৈরি. টাকা জমা ও উত্তোলনের রসিদ, ভাউচার প্রিন্ট' },
    { title: 'শেয়ার ব্যবস্থাপনা', icon: <HiOutlineClock />, desc: 'শেয়ার ক্রয় ও বিক্রয় হিসাব, শেয়ার সার্টিফিকেট, লভ্যাংশ (Dividend) হিসাব' },
    { title: 'ডকুমেন্ট আর্কাইভ', icon: <HiOutlineAdjustments />, desc: 'সমবায় সমিতির সকল গুরুত্বপূর্ণ কাগজপত্র ডিজিটালভাবে সংরক্ষণ ও পরিচালনা করা' },
    { title: 'কর্মচারী ব্যবস্থাপনা', icon: <HiOutlineUsers />, desc: 'সমবায় সমিতির কর্মকর্তা ও কর্মচারীদের সকল তথ্য, উপস্থিতি, বেতন এবং কর্মক্ষমতা সহজে পরিচালনা করা' },
    { title: 'প্রশাসনিক সুবিধা', icon: <HiOutlineOfficeBuilding />, desc: 'মিটিং ম্যানেজমেন্ট, নোটিশ ম্যানেজমেন্ট' },
    { title: 'রিপোর্ট ও বিশ্লেষণ', icon: <HiOutlineCurrencyDollar />, desc: 'দৈনিক, মাসিক ও বার্ষিক রিপোর্ট' },
    { title: 'SMS ও নোটিফিকেশন', icon: <HiOutlineCalculator />, desc: 'কিস্তি পরিশোধের রিমাইন্ডার, সদস্যকে SMS পাঠানো, গুরুত্বপূর্ণ নোটিশ প্রেরণ' },
    { title: 'মোবাইল অ্যাপ', icon: <HiOutlineUserGroup />, desc: 'সমবায় সমিতি সফটওয়্যারের মোবাইল অ্যাপ সদস্য, কর্মকর্তা এবং কালেকশন কর্মীদের জন্য যেকোনো সময় ও যেকোনো স্থান থেকে সেবা গ্রহণ ও তথ্য ব্যবস্থাপনার সুবিধা প্রদান করে' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="modules" className="section bg-offset" style={{ backgroundColor: 'var(--bg-offset)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Complete Somity System Modules</h2>
          <p className="section-subtitle">
            একটি সম্পূর্ণ সমিতি ম্যানেজমেন্ট সিস্টেমের জন্য প্রয়োজনীয় সব মডিউল এখানে অন্তর্ভুক্ত
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.modulesGrid}
        >
          {modules.map((module, index) => (
            <motion.div key={index} variants={itemVariants} className={styles.moduleCard}>
              <div className={styles.iconWrapper}>{module.icon}</div>
              <h3 className={styles.moduleTitle}>{module.title}</h3>
              <p className={styles.moduleDesc}>{module.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
