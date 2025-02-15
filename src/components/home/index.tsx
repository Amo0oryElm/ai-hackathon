// import Button from '@mui/material/Button';
import PricingCard from '../Card'
import Banner from './banner';
const Home = () => {
  return (
    <div 
    className='max-w-[1400px] m-auto'
    >
       <Banner/>
      <div className="container relative z-10 mt-5 flex flex-col gap-5">
        <section className='flex flex-col gap-2 w-full'>
          <h2>Addressing the Challenge: Vendor Selection</h2>
          <p>
            Manual evaluation of proposals often leads to inconsistencies,
            subjectivity, and inefficiencies.
          </p>
        </section>
        <section className="mt-4 flex flex-col gap-2 w-full">
          <h2>Our Solution: AI-Powered Evaluation</h2>
          <ul className='list-inside list-disc'>
            <li>
              Automated Proposal Analysis: AI extracts key insights from
              proposals.
            </li>
            <li>Objective Scoring: AI eliminates bias and subjectivity.</li>
            <li>
              Comprehensive Evaluation: Technical and financial analyses ensure
              a holistic assessment.
            </li>
          </ul>
        </section>
        <div className="flex flex-col gap-4 w-full">
            <h2>Pricing Strategy</h2>
            <PricingCard/>
        </div>
        <section className="mt-4 flex flex-col gap-4 w-full">
          <h2>Target Markets</h2>
          <ul className='list-inside list-disc'>
            <li>Government: Ministries, agencies, institutions.</li>
            <li>Private: Large corporations, financial institutions.</li>
            <li>Specialized: Oil and gas, healthcare, education.</li>
          </ul>
        </section>
        <section className="mt-4 flex flex-col gap-4 w-full">
          <h2>Competitive Advantages</h2>
          <ul className='list-inside list-disc'>
            <li>Government Integration</li>
            <li>Arabic Support</li>
            <li>Cybersecurity Standards</li>
            <li>Local Expertise</li>
            <li>Advanced Reporting</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
