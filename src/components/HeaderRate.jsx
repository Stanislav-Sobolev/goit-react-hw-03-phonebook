import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EuroIcon from '@mui/icons-material/Euro';

export const HeaderRate = ({ rateUahUsd, rateUahEur }) => {
  return (
    <div className="headerRateList">
      <div className="headerRateItem">
        <AttachMoneyIcon sx={{ fontSize: 22 }} />
        {rateUahUsd}
      </div>

      <div className="headerRateItem">
        <EuroIcon sx={{ fontSize: 20 }} />
        {rateUahEur}
      </div>
    </div>
  );
};
