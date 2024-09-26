import React from 'react';
import Card from "./Card";

const PlanningToAdoptAPet = () => {
  return (
    <div className='planning-container'>
        <h1>Planning to Donate Blood?</h1>
        <div className='boxes-container'>
            <Card title="The Joy of Saving Lives" description="Contributing to the blood donation process brings immense satisfaction. Just as giving a gift can bring joy, donating blood creates a sense of fulfillment, knowing you're providing someone with a second chance at life."/>
            <Card title="A Guide to Blood Donation" description="Considering becoming a blood donor? Blood donation is a thoughtful and impactful way to give back to the community. The process involves simple planning, understanding eligibility, and ensuring a healthy donation experience."/>
            <Card title="The Healing Power of Blood Donations" description="Blood donations have the power to change lives in extraordinary ways. Your contribution can help patients recover from surgeries, accidents, or illnesses, creating a profound impact on their health and well-being."/>
        </div>
    </div>
  )
}

export default PlanningToAdoptAPet;