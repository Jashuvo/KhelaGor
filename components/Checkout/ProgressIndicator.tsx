import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
}

const CheckIcon = () => (
    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);


const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ currentStep }) => {
  const steps = ['Shipping', 'Payment', 'Review'];

  const getStepClasses = (stepIndex: number) => {
    const isCompleted = currentStep > stepIndex + 1;
    const isActive = currentStep === stepIndex + 1;

    let base = "w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold transition-all duration-300";
    if (isCompleted) return `${base} bg-green-400 text-black`;
    if (isActive) return `${base} bg-blue-500 text-white scale-110 shadow-[4px_4px_0_black]`;
    return `${base} bg-white text-black`;
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center text-center">
              <div className={getStepClasses(index)}>
                {currentStep > index + 1 ? <CheckIcon /> : index + 1}
              </div>
              <p className={`mt-2 font-bold ${currentStep >= index + 1 ? 'text-black' : 'text-gray-500'}`}>{step}</p>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-4 rounded-full ${currentStep > index + 1 ? 'bg-black' : 'bg-gray-300'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
