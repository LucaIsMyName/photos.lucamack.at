import { useTheme } from "../../contexts/ThemeContext";
import * as Select from "@radix-ui/react-select";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CONFIG } from "../../config";

interface SortFilterBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortKey: string;
  setSortKey: (value: any) => void;
  sortOptions: { value: string; label: string }[];
  sortOrder: "asc" | "desc";
  setSortOrder: (value: "asc" | "desc") => void;
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  onClearFilters: () => void;
}

const SortFilterBar = ({ searchTerm, setSearchTerm, sortKey, setSortKey, sortOptions, sortOrder, setSortOrder, startDate, setStartDate, endDate, setEndDate, onClearFilters }: SortFilterBarProps) => {
  const { theme } = useTheme();

  return (
    <div className="flex items-center w-full">
      <div className={`flex-shrink-0 p-2  ${CONFIG.theme.border.right} `}>
        <input
          type="text"
          placeholder="Suchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={`bg-transparent focus:outline-none w-48`}
        />
      </div>

      <div className={`flex-shrink-0 flex items-center gap-4 p-2 px-4  ${CONFIG.theme.border.right}`}>
        <label
          htmlFor="startDate"
          className="whitespace-nowrap">
          Filter von
        </label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="bg-transparent focus:outline-none uppercase"
        />
        <label htmlFor="endDate">bis</label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="bg-transparent focus:outline-none uppercase"
        />
      </div>

      <div className={`flex-shrink-0 flex items-center gap-4 p-2 px-4  ${CONFIG.theme.border.right}`}>
        <span className="whitespace-nowrap">Sortieren nach</span>
        <Select.Root
          value={sortKey}
          aria-label="Sortieren nach"
          onValueChange={setSortKey}>
          <Select.Trigger className={`inline-flex items-center justify-center gap-2 bg-transparent focus:outline-none`}>
            <Select.Value />
            <Select.Icon>
              <ChevronDown size={16} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content className={`overflow-hidden ${theme === "dark" ? "bg-black text-white " : "bg-white text-black"}  ${CONFIG.theme.border.default}`}>
              <Select.ScrollUpButton className="flex items-center justify-center h-6 cursor-default">
                <ChevronUp />
              </Select.ScrollUpButton>
              <Select.Viewport className="p-1">
                {sortOptions.map((option) => (
                  <Select.Item
                    key={option.value}
                    value={option.value}
                    aria-label={option.label}
                    className={`text-sm leading-none flex items-center h-6 pr-8 pl-6 relative select-none data-[highlighted]:outline-none ${theme === "dark" ? "data-[highlighted]:bg-red-300 data-[highlighted]:text-black" : "data-[highlighted]:bg-red-600 data-[highlighted]:text-white"}`}>
                    <Select.ItemText>{option.label}</Select.ItemText>
                  </Select.Item>
                ))}
              </Select.Viewport>
              <Select.ScrollDownButton className="flex items-center justify-center h-6 cursor-default">
                <ChevronDown />
              </Select.ScrollDownButton>
            </Select.Content>
          </Select.Portal>
        </Select.Root>
        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          aria-label="Sortieren nach"
          className="whitespace-nowrap">
          {sortOrder === "asc" ? "(Aufsteigend)" : "(Absteigend)"}
        </button>
      </div>
      <div className="flex-shrink-0 p-2 px-4">
        <button
          onClick={onClearFilters}
          aria-label="Alle Filter löschen"
          className={`${theme === "dark" ? "text-red-300" : "text-red-600"} underline underline-offset-4 whitespace-nowrap hover:underline`}>
          Filter löschen
        </button>
      </div>
    </div>
  );
};

export default SortFilterBar;
