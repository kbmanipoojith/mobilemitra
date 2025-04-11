'use client';

import { useState } from 'react';
import { repairGuides, RepairGuide } from '@/lib/data/repairGuides';

export default function RepairGuides() {
  const [selectedGuide, setSelectedGuide] = useState<RepairGuide | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Mobile Repair Guides
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
            Step-by-step guides for common mobile phone repairs
          </p>
        </div>

        <div className="mt-12">
          {selectedGuide ? (
            <div className="max-w-3xl mx-auto">
              <button
                onClick={() => setSelectedGuide(null)}
                className="mb-6 inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-500 dark:hover:text-teal-300"
              >
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all guides
              </button>

              <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                <div className="px-4 py-5 sm:px-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center">
                    <span className="mr-2">{selectedGuide.icon}</span>
                    {selectedGuide.title}
                  </h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span className="mr-4">Difficulty: {selectedGuide.difficulty}</span>
                    <span>Time: {selectedGuide.timeRequired}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Required Tools</h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedGuide.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Important Warnings</h4>
                  <ul className="mb-6 space-y-2">
                    {selectedGuide.warnings.map((warning, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-yellow-500 mr-2">⚠️</span>
                        <span className="text-gray-600 dark:text-gray-300">{warning}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Step-by-Step Instructions</h4>
                  <div className="space-y-4">
                    {selectedGuide.steps.map((step) => (
                      <div key={step.step} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                          Step {step.step}: {step.description}
                        </h5>
                        {step.warning && (
                          <p className="text-yellow-600 dark:text-yellow-400 text-sm mt-1">
                            ⚠️ {step.warning}
                          </p>
                        )}
                        {step.tools && step.tools.length > 0 && (
                          <div className="mt-2">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Tools needed: </span>
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              {step.tools.join(', ')}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {repairGuides.map((guide) => (
                <button
                  key={guide.id}
                  onClick={() => setSelectedGuide(guide)}
                  className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-left hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:focus:ring-offset-gray-900"
                >
                  <div className="flex items-center mb-4">
                    <span className="text-2xl mr-3">{guide.icon}</span>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {guide.title}
                    </h3>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p>Difficulty: {guide.difficulty}</p>
                    <p>Time: {guide.timeRequired}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 