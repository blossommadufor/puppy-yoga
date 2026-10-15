import React from "react";
import Footer from "../components/Footer";
import ImpactHero from "../components/impact/ImpactHero";
import ImpactArticle from "../components/impact/ImpactArticle";
import ImpactPartnerCta from "../components/impact/ImpactPartnerCta";

const ImpactPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#2C2C2C] flex flex-col justify-between pt-16 sm:pt-20">
      <main className="flex-1">
        <ImpactHero />
        <ImpactArticle />
        <ImpactPartnerCta />
      </main>
      <Footer />
    </div>
  );
};

export default ImpactPage;
