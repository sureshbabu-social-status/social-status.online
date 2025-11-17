import React, { useState, useMemo, useEffect } from 'react';
import { PROFILES, SITE_CONFIG, ALL_EXPERTISE_TAGS } from './constants';
import ProfileCard from './components/ProfileCard';
import { FaSearch, FaMoon, FaSun, FaFilter, FaStar, FaTimes, FaUser, FaExpand } from 'react-icons/fa';
import { useTheme } from './hooks/useTheme';
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion';
import { analytics } from './analytics';
import type { Profile } from './types';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [filterSearch, setFilterSearch] = useState('');
  const [showAllFiltersModal, setShowAllFiltersModal] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    analytics.init();
    analytics.pageView(window.location.pathname);
  }, []);

  // Filter profiles based on search and filters
  const filteredProfiles = useMemo(() => {
    return PROFILES.filter((profile: Profile) => {
      // Search query filter
      const matchesSearch = searchQuery === '' || 
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.expertise.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));

      // Featured filter
      const matchesFeatured = !showFeaturedOnly || profile.featured;

      // Tags filter
      const matchesTags = selectedTags.length === 0 || 
        selectedTags.some(tag => 
          profile.tags.includes(tag) || 
          profile.expertise.includes(tag)
        );

      return matchesSearch && matchesFeatured && matchesTags;
    });
  }, [searchQuery, showFeaturedOnly, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
    setShowFeaturedOnly(false);
    setFilterSearch('');
  };

  // Filter expertise tags based on search
  const filteredExpertiseTags = useMemo(() => {
    if (filterSearch === '') return ALL_EXPERTISE_TAGS;
    return ALL_EXPERTISE_TAGS.filter(tag => 
      tag.toLowerCase().includes(filterSearch.toLowerCase())
    );
  }, [filterSearch]);

  const hasActiveFilters = selectedTags.length > 0 || showFeaturedOnly;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-neumorphic-bg via-neumorphic-light to-neumorphic-bg 
                     dark:from-dark-bg dark:via-dark-card dark:to-dark-bg transition-colors duration-500`}>
      
      {/* Header - Optimized Layout */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-neumorphic-bg/80 dark:bg-dark-bg/80 
                         shadow-[0_4px_12px_rgba(163,177,198,0.3)]
                         dark:shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo - Left */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 
                              flex items-center justify-center text-white font-bold text-lg
                              shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                              dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]">
                SS
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-800 dark:text-dark-text leading-tight">
                  {SITE_CONFIG.name}
                </h1>
                <p className="text-xs text-gray-600 dark:text-dark-muted leading-tight">
                  {SITE_CONFIG.tagline}
                </p>
              </div>
            </div>

            {/* Search Bar - Center (Takes most space) */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-dark-muted text-sm" />
                <input
                  type="text"
                  placeholder="Search profiles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-dark-card 
                             text-gray-800 dark:text-dark-text text-sm
                             shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                             dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.4),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]
                             focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-dark-light
                             transition-all duration-300"
                />
              </div>
            </div>

            {/* Theme Toggle - Right */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                         dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                         hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                         dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                         text-gray-700 dark:text-dark-text transition-all duration-300 flex-shrink-0"
              aria-label="Toggle theme">
              {theme === 'light' ? <FaMoon className="text-lg" /> : <FaSun className="text-lg" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Hero + Filters Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 animate-fade-in">
          
          {/* Hero Section - Left Side (2 columns) */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-dark-text mb-3">
              Discover Exceptional <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Talent</span>
            </h2>
            <p className="text-base text-gray-600 dark:text-dark-muted leading-relaxed">
              {SITE_CONFIG.description}
            </p>
          </div>

          {/* Filters Panel - Right Side (1 column) */}
          <div className="lg:col-span-1">
            <div className="p-4 rounded-xl bg-gradient-to-br from-neumorphic-bg to-neumorphic-light dark:from-dark-card dark:to-dark-highlight
                            shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]
                            dark:shadow-[6px_6px_12px_rgba(0,0,0,0.5),-6px_-6px_12px_rgba(255,255,255,0.05)]
                            h-full">
              
              {/* Filter Header */}
              <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200 dark:border-dark-highlight">
                <FaFilter className="text-blue-500" />
                <h3 className="text-sm font-bold text-gray-800 dark:text-dark-text">Quick Filters</h3>
              </div>

              {/* Featured Toggle + Filter Search - Single Row */}
              <div className="flex gap-6 mb-3">
                {/* Featured Button - 25% width */}
                <button
                  onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
                  className={`flex-[1] px-2 py-1.5 rounded-lg font-semibold text-xs flex items-center justify-center gap-1.5
                             shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff]
                             dark:shadow-[3px_3px_6px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(255,255,255,0.05)]
                             hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                             dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                             transition-all duration-300
                             ${showFeaturedOnly ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' : 'bg-white dark:bg-dark-bg text-gray-700 dark:text-dark-text'}`}>
                  <FaStar className="text-xs" />
                  Featured
                </button>

                {/* Filter Search - 75% width (50% more than featured) */}
                <div className="flex-[2] relative">
                  <input
                    type="text"
                    placeholder="Search filters..."
                    value={filterSearch}
                    onChange={(e) => setFilterSearch(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-white dark:bg-dark-bg
                               text-gray-800 dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500
                               shadow-[inset_3px_3px_6px_#a3b1c6,inset_-3px_-3px_6px_#ffffff]
                               dark:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.4),inset_-3px_-3px_6px_rgba(255,255,255,0.05)]
                               focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                               transition-all duration-300"
                  />
                  <FaSearch className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 text-xs" />
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="mb-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-gray-600 dark:text-dark-muted">Expertise ({filteredExpertiseTags.length}):</p>
                  <button
                    onClick={() => setShowAllFiltersModal(true)}
                    className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 
                               flex items-center gap-1 font-medium transition-colors"
                    aria-label="View all filters">
                    <FaExpand className="text-[10px]" />
                    View All
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 max-h-[140px] overflow-y-auto pr-1 custom-scrollbar">
                  {filteredExpertiseTags.slice(0, 12).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-2 py-1 rounded-md text-xs font-medium transition-all duration-200
                                 ${selectedTags.includes(tag)
                                   ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                                   : 'bg-gray-200 dark:bg-dark-bg text-gray-700 dark:text-dark-text hover:bg-gray-300 dark:hover:bg-dark-highlight'
                                 }`}>
                      {tag}
                    </button>
                  ))}
                </div>
                {filteredExpertiseTags.length > 12 && (
                  <p className="text-[10px] text-gray-500 dark:text-dark-muted mt-2 text-center">
                    +{filteredExpertiseTags.length - 12} more filters available
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count - Moved above profile cards */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-muted">
            <FaUser className="text-blue-500" />
            <span>
              Showing <span className="font-bold text-gray-800 dark:text-dark-text">{filteredProfiles.length}</span> of {PROFILES.length} profiles
            </span>
          </div>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5
                         bg-red-500 text-white
                         shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff]
                         dark:shadow-[3px_3px_6px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(255,255,255,0.05)]
                         hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                         dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-2px_-2px_4px_rgba(255,255,255,0.05)]
                         transition-all duration-300">
              <FaTimes className="text-xs" />
              Clear Filters
            </button>
          )}
        </div>

        {/* All Filters Modal */}
        {showAllFiltersModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={() => setShowAllFiltersModal(false)}>
            <div 
              className="bg-white dark:bg-dark-card rounded-2xl shadow-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden
                         animate-fade-in"
              onClick={(e) => e.stopPropagation()}>
              
              {/* Modal Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200 dark:border-dark-highlight">
                <div className="flex items-center gap-3">
                  <FaFilter className="text-blue-500 text-xl" />
                  <h2 className="text-xl font-bold text-gray-800 dark:text-dark-text">All Expertise Filters</h2>
                </div>
                <button
                  onClick={() => setShowAllFiltersModal(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-highlight transition-colors"
                  aria-label="Close modal">
                  <FaTimes className="text-gray-600 dark:text-dark-muted" />
                </button>
              </div>

              {/* Modal Search */}
              <div className="p-5 border-b border-gray-200 dark:border-dark-highlight">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search filters..."
                    value={filterSearch}
                    onChange={(e) => setFilterSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg bg-gray-50 dark:bg-dark-bg
                               text-gray-800 dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500
                               border border-gray-200 dark:border-dark-highlight
                               focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                               transition-all duration-300"
                  />
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                </div>
                <p className="text-xs text-gray-500 dark:text-dark-muted mt-2">
                  Showing {filteredExpertiseTags.length} of {ALL_EXPERTISE_TAGS.length} filters
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-5 overflow-y-auto max-h-[calc(80vh-200px)] custom-scrollbar">
                <div className="flex flex-wrap gap-2">
                  {filteredExpertiseTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                 ${selectedTags.includes(tag)
                                   ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                                   : 'bg-gray-100 dark:bg-dark-bg text-gray-700 dark:text-dark-text hover:bg-gray-200 dark:hover:bg-dark-highlight hover:scale-105'
                                 }`}>
                      {tag}
                    </button>
                  ))}
                </div>
                {filteredExpertiseTags.length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-dark-muted">No filters match your search</p>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between p-5 border-t border-gray-200 dark:border-dark-highlight">
                <p className="text-sm text-gray-600 dark:text-dark-muted">
                  {selectedTags.length} filter{selectedTags.length !== 1 ? 's' : ''} selected
                </p>
                <div className="flex gap-2">
                  {selectedTags.length > 0 && (
                    <button
                      onClick={clearFilters}
                      className="px-4 py-2 rounded-lg text-sm font-semibold bg-red-500 text-white
                                 hover:bg-red-600 transition-colors duration-200">
                      Clear All
                    </button>
                  )}
                  <button
                    onClick={() => setShowAllFiltersModal(false)}
                    className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-500 text-white
                               hover:bg-blue-600 transition-colors duration-200">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}



        {/* Profile Grid - 4 columns on large screens */}
        {filteredProfiles.length > 0 ? (
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 
                          ${prefersReducedMotion ? '' : 'animate-fade-in'}`}>
            {filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-dark-text mb-2">
              No profiles found
            </h3>
            <p className="text-gray-600 dark:text-dark-muted mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 rounded-xl font-semibold bg-blue-500 text-white
                         shadow-[5px_5px_10px_#a3b1c6,-5px_-5px_10px_#ffffff]
                         dark:shadow-[5px_5px_10px_rgba(0,0,0,0.4),-5px_-5px_10px_rgba(255,255,255,0.05)]
                         hover:bg-blue-600 transition-all duration-300">
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 bg-white/50 dark:bg-dark-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-dark-muted text-sm">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-dark-muted text-xs mt-2">
            Showcasing exceptional talent and innovation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
