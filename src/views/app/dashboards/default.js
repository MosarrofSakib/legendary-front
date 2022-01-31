import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import IconCardsCarousel from 'containers/dashboards/IconCardsCarousel';
import RecentOrders from 'containers/dashboards/RecentOrders';
import Logs from 'containers/dashboards/Logs';
import Tickets from 'containers/dashboards/Tickets';
import Calendar from 'containers/dashboards/Calendar';
import BestSellers from 'containers/dashboards/BestSellers';
import ProfileStatuses from 'containers/dashboards/ProfileStatuses';
import GradientCardContainer from 'containers/dashboards/GradientCardContainer';
import Cakes from 'containers/dashboards/Cakes';
import GradientWithRadialProgressCard from 'components/cards/GradientWithRadialProgressCard';
import SortableStaticticsRow from 'containers/dashboards/SortableStaticticsRow';
import AdvancedSearch from 'containers/dashboards/AdvancedSearch';
import SmallLineCharts from 'containers/dashboards/SmallLineCharts';
import SalesChartCard from 'containers/dashboards/SalesChartCard';
import ProductCategoriesPolarArea from 'containers/dashboards/ProductCategoriesPolarArea';
import WebsiteVisitsChartCard from 'containers/dashboards/WebsiteVisitsChartCard';
import ConversionRatesChartCard from 'containers/dashboards/ConversionRatesChartCard';
import TopRatedItems from 'containers/dashboards/TopRatedItems';

const DefaultDashboard = ({ intl, match }) => {
  const { messages } = intl;

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.default" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12">
          <IconCardsCarousel />
          <Row>
            <Colxx md="12" className="mb-4">
              <SalesChartCard />
            </Colxx>
          </Row>
        </Colxx>
      </Row>
      <Row>
        <Colxx xl="6" lg="12" className="mb-4">
          <Calendar />
        </Colxx>
        <Colxx xl="6" lg="12" className="mb-4">
          <BestSellers />
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(DefaultDashboard);
