const StatusDisplay = ({ status }) => {
  
  const getColor = (status) => {
    let color;
    switch (status) {
      case 'done':
        color = 'rgb(186, 255, 201)'
        break
      case 'in progress':
        color = 'rgb(255, 233, 186)'
        break
      case 'on hold':
        color = 'rgb(255, 179, 186)'
        break
      default:
        color = 'rgb(186, 225, 255)'
    }

    return color

  }
  
  return (
     <div className="status-display" style={{ backgroundColor: getColor(status)}}>
      {status}
     </div>
  );
};

export default StatusDisplay;
