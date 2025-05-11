import React, { useEffect, useState } from 'react';
import { StructuredText } from 'react-datocms';
import { getRecommendation } from '../queries/getRecommendations';
import { Recommendation } from '../types';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getRecommendation();
      setRecommendation(data);
    }
    fetchData();
  }, []);

  if (!recommendation) return <div>Loading...</div>;

  return (
    <div className="timeline-container">
      <div className="recommendation-card">
        <div className="recommendation-header">
          <img
            src={recommendation.recommenderPicture.url}
            alt={recommendation.recommenderName}
            className="profile-pic"
          />
          <div>
            <h3>{recommendation.recommenderName}</h3>
            <p>{recommendation.recommenderProfessionalTitle}</p>
            <p className="date">
              {new Date(recommendation.dateOfRecommendation).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="recommendation-body">
          <StructuredText data={recommendation.content.value} />
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
