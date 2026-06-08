'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiCreditCard, HiSupport } from 'react-icons/hi';
import styles from './TermsSection.module.css';

const TermsSection = () => {
  const paymentTerms = [
    'কাজ শুরু করার জন্য Work Order প্রদান এবং ১০০% অগ্রিম পেমেন্ট আবশ্যক।',
    'প্রজেক্ট সময় গণনা শুরু হবে Work Order প্রদানের তারিখ থেকে।',
    'সফটওয়্যার বন্ধ করতে চাইলে অবশ্যই তিন মাস আগে জানাতে হবে।',

  ];

  const supportTerms = [
    'কোন ধরনের ফি সাপোর্ট প্রদান করা হয় না।',
    'মাসিক সার্ভিস চার্জ কতজন মেম্বার তার ওপর নির্ভর করবে।',
    'এক মাস পর নতুন Module বা Custom Demand এর জন্য আলাদা চার্জ প্রযোজ্য।',
    'সফটওয়্যারের সকল কোড Easy Somity-এর সম্পত্তি হিসেবে গণ্য হবে।',
    'ক্লায়েন্ট শুধুমাত্র ব্যবহারের অধিকার পাবেন বিক্রয়যোগ্য নয়।',
    'অবৈধ বিক্রয়ের প্রমাণ পাওয়া গেলে Bangladesh Law অনুযায়ী আইনগত ব্যবস্থা নেওয়া হবে।',
  ];

  return (
    <section className="section bg-offset" style={{ backgroundColor: 'var(--bg-offset)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Terms & Conditions</h2>
          <p className="section-subtitle">
            Easy Somity সফটওয়্যার ডেভেলপমেন্ট, ব্যবহার ও সাপোর্ট সংক্রান্ত আমাদের শর্তাবলী
          </p>
        </motion.div>

        <div className={styles.termsGrid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.termsCard}
          >
            <h3 className={styles.termsTitle}>
              <HiCreditCard /> Payment Terms
            </h3>
            <ul className={styles.termsList}>
              {paymentTerms.map((term, index) => (
                <li key={index} className={styles.termItem}>
                  <HiCheck className={styles.termIcon} />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.termsCard}
          >
            <h3 className={styles.termsTitle}>
              <HiSupport /> After Development Support
            </h3>
            <ul className={styles.termsList}>
              {supportTerms.map((term, index) => (
                <li key={index} className={styles.termItem}>
                  <HiCheck className={styles.termIcon} />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
