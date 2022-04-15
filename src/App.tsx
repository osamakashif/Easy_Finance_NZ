import { Route, Routes } from 'react-router';
import { PageLayout } from './PageLayout';
import { PlanPage } from './pages/PlanPage';
import { BudgetPage } from './pages/BudgetPage';
import { HomePage } from './pages/HomePage';
import { TaxPage } from './pages/TaxPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />} >
          <Route index element={<HomePage />} />
          <Route path="/Budget" element={<BudgetPage />} />
          <Route path="/Tax" element={<TaxPage />} />
          <Route path="/Plan" element={<PlanPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
