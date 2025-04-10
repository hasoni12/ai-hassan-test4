'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

interface BookSearchProps {
  className?: string;
}

export default function BookSearch({ className }: BookSearchProps) {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    'الكل',
    'هندسة مدنية',
    'هندسة معمارية',
    'برامج هندسية',
    'إدارة مشاريع',
    'تطوير مهني'
  ];

  const tags = [
    'تصميم خرساني',
    'تصميم معدني',
    'ميكانيكا التربة',
    'هندسة الزلازل',
    'إدارة المشاريع',
    'الرسم الهندسي',
    'نمذجة معلومات البناء',
    'أوتوكاد',
    'ريفيت',
    'SAP2000',
    'ETABS',
    'إكسل'
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const resetFilters = () => {
    setActiveCategory('الكل');
    setSelectedTags([]);
    setSearchTerm('');
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-0">بحث في الكتب</h3>
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden"
          >
            {showFilters ? 'إخفاء الفلاتر' : 'عرض الفلاتر'}
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={resetFilters}
          >
            إعادة ضبط
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن كتاب..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 pr-10 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
          />
          <svg 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className={`space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">التصنيفات</h4>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">الكلمات المفتاحية</h4>
          <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">الفلاتر النشطة</h4>
          <div className="flex flex-wrap gap-2">
            {activeCategory !== 'الكل' && (
              <div className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary px-3 py-1 rounded-full flex items-center">
                <span>التصنيف: {activeCategory}</span>
                <button
                  onClick={() => setActiveCategory('الكل')}
                  className="mr-1 hover:text-red-500 focus:outline-none"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            {selectedTags.map(tag => (
              <div key={tag} className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary px-3 py-1 rounded-full flex items-center">
                <span>{tag}</span>
                <button
                  onClick={() => toggleTag(tag)}
                  className="mr-1 hover:text-red-500 focus:outline-none"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
            {searchTerm && (
              <div className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-secondary px-3 py-1 rounded-full flex items-center">
                <span>بحث: {searchTerm}</span>
                <button
                  onClick={() => setSearchTerm('')}
                  className="mr-1 hover:text-red-500 focus:outline-none"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            {activeCategory === 'الكل' && selectedTags.length === 0 && !searchTerm && (
              <span className="text-gray-500 dark:text-gray-400 text-sm">لا توجد فلاتر نشطة</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
