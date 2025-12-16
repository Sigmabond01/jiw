import React from 'react';
import { motion } from "motion/react";
import { PlaneTakeoffIcon } from 'lucide-react';

export const FlagConnector = () => {
  return (
    <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center justify-between gap-4 w-full"
            >
              {/* Indian Flag */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="shrink-0"
              >
                <div className="w-16 h-11 rounded shadow-lg overflow-hidden">
                  <div className="h-1/3 bg-[#FF9933]"></div>
                  <div className="h-1/3 bg-white flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-[#000080] rounded-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 border border-[#000080] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="h-1/3 bg-[#138808]"></div>
                </div>
              </motion.div>

              {/* Animated Path */}
              <div className="relative grow h-1">
                <svg className="w-full h-full" viewBox="0 0 100 4" preserveAspectRatio="none">
                  <motion.path
                    d="M 0 2 Q 50 -8, 100 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="text-primary/40"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </svg>
                {/* Moving Dot */}
                <motion.div
                  className="absolute mb-22 translate-y-0 w-2.5 h-2.5 rounded-full shadow-lg"
                  initial={{ left: "0%" }}
                  animate={{ left: "calc(100% - 10px)" }}
                  transition={{
                    duration: 2,
                    delay: 1,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeInOut"
                  }}
                >
                  <PlaneTakeoffIcon />
                </motion.div>
              </div>

              {/* Japanese Flag */}
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="shrink-0"
              >
                <div className="w-16 h-11 rounded shadow-lg bg-white flex items-center justify-center">
                  <div className="w-6 h-6 bg-[#BC002D] rounded-full"></div>
                </div>
              </motion.div>
              </motion.div>
  );
};