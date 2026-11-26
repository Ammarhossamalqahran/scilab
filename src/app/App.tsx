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
        <Route path="schemas" element={<SchemasPage />} />
        <Route path="schemas/:diagramId" element={<SchemaStudyPage />} />
        <Route path="*" element={<ErrorScreen kind="notFound" />} />
      </Route>
    </Routes>
    </ErrorBoundary>
    </>
  );
}
