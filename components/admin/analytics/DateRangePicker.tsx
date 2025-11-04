import React from 'react';

const DateRangePicker: React.FC = () => {
    return (
        <div>
            {/* DateRangePicker Placeholder */}
            <input type="date" className="p-2 border rounded" />
            <span className="mx-2">to</span>
            <input type="date" className="p-2 border rounded" />
        </div>
    );
};

export default DateRangePicker;
