export const SidebarMini = ({ sections }) => {
    return (
      <div className="sidebar">
        <ul>
          {sections.map((section) => (
            <li key={section} 
             onClick={() => onSectionChange(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
