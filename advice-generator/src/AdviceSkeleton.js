import "./Skeleton.css";
const AdviceSkeleton = () => {
  return (
    <>
      <div className="advice-header-skeleton">
        <div className="skeleton-header" />
      </div>
      <div className="advice-text-skeleton">
        <div className="skeleton-text" />
        <div className="skeleton-divider" />
      </div>
      <div className="dice" />
    </>
  );
};

export default AdviceSkeleton;
