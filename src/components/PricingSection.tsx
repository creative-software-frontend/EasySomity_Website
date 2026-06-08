'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi';
import styles from './PricingSection.module.css';

const PricingSection = () => {
  const plans = [
    {
      name: '1-100 Member',
      desc: 'Per Member TK.30/Monthly',
      price: '5,000',
      features: [
       'সদস্য ব্যবস্থাপনা',
        'সঞ্চয় ব্যবস্থাপনা', 
        'ঋণ ব্যবস্থাপনা', 
        'হিসাবরক্ষণ',
        'রসিদ ও ভাউচার',
        'নিরাপত্তা ব্যবস্থা',  
        'শেয়ার ব্যবস্থাপনা',  
        'প্রশাসনিক সুবিধা',  
        'ডকুমেন্ট আর্কাইভ',  
        'কর্মচারী ব্যবস্থাপনা',  
        'অনলাইন সুবিধা',
        'রিপোর্ট ও বিশ্লেষণ', 
        'SMS ও নোটিফিকেশন',   
      ],
      popular: false,
      btnText: 'Order Now',
    },
    {
      name: '101-1000 Member',
      desc: 'Per Member TK.20/Monthly',
      price: '30,000',
      features: [
        'সদস্য ব্যবস্থাপনা',
        'সঞ্চয় ব্যবস্থাপনা', 
        'ঋণ ব্যবস্থাপনা', 
        'হিসাবরক্ষণ',
        'রসিদ ও ভাউচার', 
        'নিরাপত্তা ব্যবস্থা',  
        'শেয়ার ব্যবস্থাপনা',  
        'প্রশাসনিক সুবিধা',  
        'ডকুমেন্ট আর্কাইভ',  
        'কর্মচারী ব্যবস্থাপনা',  
        'অনলাইন সুবিধা',  
        'রিপোর্ট ও বিশ্লেষণ', 
        'SMS ও নোটিফিকেশন', 
      ],
      popular: true,
      btnText: 'Order Now',
    },
    {
      name: '1000+ Member',
      desc: 'Per Member TK.10/Monthly',
      price: '50,000',
      features: [
        'সদস্য ব্যবস্থাপনা',
        'সঞ্চয় ব্যবস্থাপনা', 
        'ঋণ ব্যবস্থাপনা', 
        'হিসাবরক্ষণ',
        'রসিদ ও ভাউচার',  
        'নিরাপত্তা ব্যবস্থা',  
        'শেয়ার ব্যবস্থাপনা',  
        'প্রশাসনিক সুবিধা',  
        'ডকুমেন্ট আর্কাইভ',  
        'কর্মচারী ব্যবস্থাপনা',
        'রিপোর্ট ও বিশ্লেষণ', 
        'SMS ও নোটিফিকেশন',   
        'অনলাইন ও মাল্টি-ব্রাঞ্চ সুবিধা', 
        'Mobile App সুবিধা',  
      ],
      popular: false,
      btnText: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Pricing Plan</h2>
          <p className="section-subtitle">
            আপনার ব্যবসার সাইজ অনুযায়ী সঠিক প্যাকেজ নির্বাচন করুন
          </p>
        </motion.div>

        <div className={styles.pricingGrid}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`${styles.pricingCard} ${plan.popular ? styles.pricingCardPopular : ''}`}
            >
              {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDesc}>{plan.desc}</p>
              <div className={styles.price}>
                <span className={styles.currency}>৳</span>
                {plan.price}
              </div>
              <ul className={styles.featureList}>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className={styles.featureItem}>
                    <HiCheck className={styles.featureIcon} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/8801978866977"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.popular ? '' : 'btn-primary'} ${styles.btnAction}`}
              >
                {plan.btnText}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
