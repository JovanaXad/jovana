export interface ExamsTableSectionProps {
  content: {
    tableTitle?: string;
    tableTitle2?: string;
    tableTitle3?: string;
    table: {
      theader: string[];
      rows: string[][];
    };
    styles: {
      headerStyles: { background: string; color: string };
      rowStyles: { background: string; color: string };
    };
  };
}
