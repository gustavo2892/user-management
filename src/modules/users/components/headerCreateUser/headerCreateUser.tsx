import { useI18n } from "@/shared/i18n";
import { Button, Paper } from "@mui/material";

import type { HeaderCreateUserProps } from "./headerCreateUser.types";

export const HeaderCreateUser = ({ handleOpenModalCreate }: HeaderCreateUserProps) => {
  const { translate } = useI18n();

  return (
    <Paper
      sx={{
        p: 2,
        marginBottom: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
      }}
    >
      <Button
        sx={{ color: "text.primary", borderColor: "text.primary" }}
        variant="outlined"
        onClick={() => handleOpenModalCreate()}
      >
        {translate("users.title.create")}
      </Button>
    </Paper>
  );
};
