import React from 'react';
import type { Profile } from '../types';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaExternalLinkAlt, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa';

interface ProfileCardProps {
  profile: Profile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const handleVisitProfile = () => {
    window.open(profile.profileUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group relative bg-gradient-to-br from-neumorphic-bg to-neumorphic-light dark:from-dark-card dark:to-dark-highlight 
                    shadow-[6px_6px_12px_#a3b1c6,-6px_-6px_12px_#ffffff]
                    dark:shadow-[6px_6px_12px_rgba(0,0,0,0.5),-6px_-6px_12px_rgba(255,255,255,0.05)]
                    rounded-xl p-4 transition-all duration-300 hover:-translate-y-1
                    hover:shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]
                    dark:hover:shadow-[8px_8px_16px_rgba(0,0,0,0.6),-8px_-8px_16px_rgba(255,255,255,0.08)]">
      
      {/* Featured Badge */}
      {profile.featured && (
        <div className="absolute top-2 right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
          ⭐ Featured
        </div>
      )}

      {/* Profile Image */}
      <div className="flex justify-center mb-3">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden 
                          shadow-[inset_4px_4px_8px_#a3b1c6,inset_-4px_-4px_8px_#ffffff]
                          dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5),inset_-4px_-4px_8px_rgba(255,255,255,0.05)]
                          border-3 border-neumorphic-bg dark:border-dark-bg">
            <img 
              src={profile.imageUrl} 
              alt={`${profile.name} profile`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          {profile.verified && (
            <div className="absolute -bottom-0.5 -right-0.5 bg-blue-500 rounded-full p-0.5 shadow-lg">
              <FaCheckCircle className="text-white text-sm" />
            </div>
          )}
        </div>
      </div>

      {/* Name & Title */}
      <div className="text-center mb-2">
        <h2 className="text-lg font-bold text-gray-800 dark:text-dark-text mb-0.5 leading-tight">
          {profile.name}
        </h2>
        <p className="text-xs font-semibold text-blue-600 dark:text-dark-light">
          {profile.title}
        </p>
      </div>

      {/* Tagline */}
      <p className="text-center text-gray-600 dark:text-dark-muted text-xs mb-3 italic line-clamp-2">
        "{profile.tagline}"
      </p>

      {/* Location */}
      {profile.location && (
        <div className="flex items-center justify-center gap-1 text-gray-500 dark:text-dark-muted text-[10px] mb-2">
          <FaMapMarkerAlt />
          <span>{profile.location}</span>
        </div>
      )}

      {/* Bio - Hidden, only show on hover or for featured */}
      {profile.featured && (
        <p className="text-gray-700 dark:text-dark-text text-xs mb-3 line-clamp-2">
          {profile.bio}
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-2">
        {profile.tags.slice(0, 3).map((tag, index) => (
          <span 
            key={index}
            className="text-[10px] px-2 py-0.5 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-dark-highlight dark:to-dark-card text-gray-700 dark:text-dark-text font-medium
                       shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                       dark:shadow-[2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.05)]">
            {tag}
          </span>
        ))}
      </div>



      {/* Achievements - Only for featured profiles */}
      {profile.featured && profile.achievements && profile.achievements.length > 0 && (
        <div className="grid grid-cols-3 gap-1 mb-2">
          {profile.achievements.slice(0, 3).map((achievement, index) => (
            <div 
              key={index}
              className="text-center p-1 rounded bg-white dark:bg-dark-bg 
                         shadow-[inset_2px_2px_4px_#a3b1c6,inset_-2px_-2px_4px_#ffffff]
                         dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.05)]">
              <p className="text-[9px] text-gray-500 dark:text-dark-muted leading-tight">{achievement.label}</p>
              <p className="text-xs font-bold text-gray-800 dark:text-dark-text">{achievement.value}</p>
            </div>
          ))}
        </div>
      )}

      {/* Social Links */}
      {profile.social && Object.keys(profile.social).length > 0 && (
        <div className="flex justify-center gap-2 mb-3">
          {profile.social.linkedin && (
            <a 
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff]
                         dark:shadow-[3px_3px_6px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(255,255,255,0.05)]
                         hover:shadow-[1px_1px_3px_#a3b1c6,-1px_-1px_3px_#ffffff]
                         dark:hover:shadow-[1px_1px_3px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.05)]
                         text-blue-700 dark:text-dark-light transition-all duration-200"
              aria-label={`${profile.name} LinkedIn`}>
              <FaLinkedin className="text-sm" />
            </a>
          )}
          {profile.social.github && (
            <a 
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff]
                         dark:shadow-[3px_3px_6px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(255,255,255,0.05)]
                         hover:shadow-[1px_1px_3px_#a3b1c6,-1px_-1px_3px_#ffffff]
                         dark:hover:shadow-[1px_1px_3px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.05)]
                         text-gray-800 dark:text-dark-text transition-all duration-200"
              aria-label={`${profile.name} GitHub`}>
              <FaGithub className="text-sm" />
            </a>
          )}
          {profile.social.twitter && (
            <a 
              href={profile.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff]
                         dark:shadow-[3px_3px_6px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(255,255,255,0.05)]
                         hover:shadow-[1px_1px_3px_#a3b1c6,-1px_-1px_3px_#ffffff]
                         dark:hover:shadow-[1px_1px_3px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.05)]
                         text-blue-400 dark:text-dark-light transition-all duration-200"
              aria-label={`${profile.name} Twitter`}>
              <FaTwitter className="text-sm" />
            </a>
          )}
          {profile.social.instagram && (
            <a 
              href={profile.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg shadow-[3px_3px_6px_#a3b1c6,-3px_-3px_6px_#ffffff]
                         dark:shadow-[3px_3px_6px_rgba(0,0,0,0.4),-3px_-3px_6px_rgba(255,255,255,0.05)]
                         hover:shadow-[1px_1px_3px_#a3b1c6,-1px_-1px_3px_#ffffff]
                         dark:hover:shadow-[1px_1px_3px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.05)]
                         text-pink-500 dark:text-dark-light transition-all duration-200"
              aria-label={`${profile.name} Instagram`}>
              <FaInstagram className="text-sm" />
            </a>
          )}
        </div>
      )}

      {/* Visit Profile Button */}
      <button
        onClick={handleVisitProfile}
        className="w-full py-2 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 
                   shadow-[4px_4px_8px_#a3b1c6,-4px_-4px_8px_#ffffff]
                   dark:shadow-[4px_4px_8px_rgba(0,0,0,0.4),-4px_-4px_8px_rgba(255,255,255,0.05)]
                   hover:shadow-[2px_2px_4px_#a3b1c6,-2px_-2px_4px_#ffffff]
                   dark:hover:shadow-[2px_2px_5px_rgba(0,0,0,0.4),-2px_-2px_5px_rgba(255,255,255,0.05)]
                   hover:from-blue-600 hover:to-purple-700 
                   transition-all duration-300 transform hover:scale-105
                   flex items-center justify-center gap-2">
        Visit Profile
        <FaExternalLinkAlt className="text-sm" />
      </button>
    </div>
  );
};

export default ProfileCard;
