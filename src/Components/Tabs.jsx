const Tabs = ({ tabDetails, setActiveTab, isActive, setRandomImage }) => {
  const { displayText, tabId } = tabDetails;
  const activeClass = isActive ? "active-tab" : "inactive-tab";
  return (
    <li
      className={activeClass}
      onClick={() => {
        setActiveTab(tabId);
        setRandomImage(false);
      }}
    >
      {displayText}
    </li>
  );
};

export default Tabs;
