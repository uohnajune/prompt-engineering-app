import React, { useState } from 'react';

const techniques = [
  {
    id: 'zero-shot',
    name: 'Zero-shot Prompting',
    description: 'Asking the model to perform a task without any examples.',
    diagram: '(Task) → [AI Model] → (Output)',
    example: 'Translate the following English text to French: "Hello, how are you?"',
    practice: 'Try zero-shot prompting: Ask the AI to summarize a news article without providing any examples.'
  },
  // ... (include all other techniques here)
];

const TechniqueCard = ({ technique }) => (
  <div className="w-full bg-purple-100 p-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-purple-800 mb-2">{technique.name}</h2>
    <p className="text-purple-600 mb-4">{technique.description}</p>
    <div className="mb-4">
      <h4 className="font-semibold mb-2 text-purple-700">Diagram:</h4>
      <p className="bg-white p-2 rounded">{technique.diagram}</p>
    </div>
    <div className="mb-4">
      <h4 className="font-semibold mb-2 text-purple-700">Example:</h4>
      <p className="bg-white p-2 rounded">{technique.example}</p>
    </div>
    <div>
      <h4 className="font-semibold mb-2 text-purple-700">Practice:</h4>
      <p className="bg-white p-2 rounded">{technique.practice}</p>
    </div>
  </div>
);

const HomePage = ({ onSelectTechnique }) => (
  <div className="max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-6 text-purple-800">Introduction to Prompt Engineering</h1>
    <p className="mb-4 text-purple-700">
      Prompt engineering is the art and science of designing effective prompts for large language models (LLMs) like GPT-3 or Claude. It involves crafting input text that guides the AI to produce desired outputs, solve specific problems, or perform particular tasks.
    </p>
    <p className="mb-6 text-purple-700">
      By mastering prompt engineering techniques, you can significantly improve the quality, relevance, and accuracy of AI-generated content. These techniques help in leveraging the full potential of AI models across various applications.
    </p>
    <h2 className="text-2xl font-semibold mb-4 text-purple-800">Explore Prompt Engineering Techniques</h2>
    <div className="grid grid-cols-2 gap-4">
      {techniques.map((technique) => (
        <button
          key={technique.id}
          onClick={() => onSelectTechnique(technique.id)}
          className="h-auto py-4 text-left w-full bg-purple-600 hover:bg-purple-700 text-white rounded"
        >
          <div>
            <h3 className="font-bold mb-2">{technique.name}</h3>
            <p className="text-sm">{technique.description}</p>
          </div>
        </button>
      ))}
    </div>
  </div>
);

const PromptEngineeringApp = () => {
  const [selectedTechnique, setSelectedTechnique] = useState(null);

  const handleSelectTechnique = (techniqueId) => {
    const technique = techniques.find(t => t.id === techniqueId);
    setSelectedTechnique(technique);
  };

  const handleBackToHome = () => {
    setSelectedTechnique(null);
  };

  return (
    <div className="container mx-auto p-4">
      {!selectedTechnique ? (
        <HomePage onSelectTechnique={handleSelectTechnique} />
      ) : (
        <>
          <button 
            onClick={handleBackToHome}
            className="bg-purple-600 text-white p-2 rounded mb-4"
          >
            Back to Techniques
          </button>
          <TechniqueCard technique={selectedTechnique} />
        </>
      )}
    </div>
  );
};

export default PromptEngineeringApp;