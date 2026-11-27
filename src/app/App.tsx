import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary, ErrorScreen } from '../components/ErrorScreen';
import { RouteTitle } from './RouteTitle';
import { Splash } from '../components/Splash';
import { AppShell } from '../components/AppShell';
import { HomePage } from '../pages/HomePage';
import { MicroscopePage } from '../pages/MicroscopePage';
import { ExamPage } from '../pages/ExamPage';
import { SchemasPage } from '../pages/SchemasPage';
import { StudyPage } from '../pages/StudyPage';
import { DailyPage } from '../pages/DailyPage';
import { ComparePage } from '../pages/ComparePage';
import { ChallengePage } from '../pages/ChallengePage';
import { TrueFalsePage } from '../pages/TrueFalsePage';
import { SurvivalPage } from '../pages/SurvivalPage';
import { DepartmentPage } from '../pages/DepartmentPage';
import { SpotPage } from '../pages/SpotPage';
import { AdminPage } from '../pages/AdminPage';
import { SchemaStudyPage } from '../pages/SchemaStudyPage';

export function App() {
  return (
    <>
    <Splash />
    <RouteTitle />
    <ErrorBoundary>
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="microscope" element={<MicroscopePage />} />
        <Route path="exams" element={<ExamPage />} />
        <Route path="study" element={<StudyPage />} />
        <Route path="daily" element={<DailyPage />} />
        <Route path="compare" element={<ComparePage />} />
        <Route path="spot" element={<SpotPage />} />
        <Route path="challenge" element={<ChallengePage />} />
        <Route path="challenge/true-false" element={<TrueFalsePage />} />
        <Route path="challenge/survival" element={<SurvivalPage />} />
        <Route path="challenge/department" element={<DepartmentPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="schemas" element={<SchemasPage />} />
        <Route path="schemas/:diagramId" element={<SchemaStudyPage />} />
        <Route path="*" element={<ErrorScreen kind="notFound" />} />
      </Route>
    </Routes>
    </ErrorBoundary>
    </>
  );
}
