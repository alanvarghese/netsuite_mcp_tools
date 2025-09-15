/*
 * tablelist_acp.js
 * @NApiVersion 2.1
 * @NModuleScope Public
 */

define(["N/query", "N/log", "N/file"], function (query, log, file) {
  return {
   
    getTableList: async function (params) {
      try {
        const tableFile = file.load({ id: 11276 }); // ID of the text file containing table names
        const fileContents = tableFile.getContents();
        const tableNames = fileContents.split(/\r?\n/).filter((line) => line.trim() !== "");

        return tableNames;
      } catch (e) {
        log.error({
          title: "Error fetching table names",
          details: e,
        });

        return {
          error: `Error fetching table names: ${e.toString()}`,
        };
      }
    },
  };
});
