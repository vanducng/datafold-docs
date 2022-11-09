---
sidebar_position: 4
title: Options
---


You can use the following options to specificy the configuration of a data-diff run.

| config key | CLI switch | Description | Within-Database | Cross-Database |
|------------|------------|-------------|--|--|
|    | `--help`           | Show help message and exit. | ✅ | ✅ |
|    | `-k` or `--key-columns`           | Name of the primary key column. If none provided, default is 'id'. | ✅ | ✅ |
|    | `-t` or `--update-column`           | Name of updated_at/last_updated column. | ✅ | ✅ |
|    | `-c` or `--columns`           | Names of extra columns to compare.  Can be used more than once in the same command Accepts a name or a pattern like in SQL. Example: `-c col% -c another_col -c %foorb.r%` | ✅ | ✅ |
|    | `-l` or `--limit`           | Maximum number of differences to find (limits maximum bandwidth and runtime). | ✅ | ✅ |
|    | `-s` or `--stats`           | Print stats instead of a detailed diff. | ✅ | ✅ |
|    | `-d` or `--debug`           | Print debug info. | ✅ | ✅ |
|    | `-v` or `--verbose`           | Print extra info. | ✅ | ✅ |
|    | `-i` or `--interactive`           | Confirm queries, implies `--debug` | ✅ | ✅ |
|    | `--json`           | Print JSONL output for machine readability. | ✅ | ✅ |
|    | `--min-age`       | Considers only rows older than specified. Useful for specifying replication lag. Example: `--min-age=5min` ignores rows from the last 5 minutes. Valid units: `d, days, h, hours, min, minutes, mon, months, s, seconds, w, weeks, y, years` | ✅ | ✅ |
|    | `--max-age`           | Considers only rows younger than specified. See `--min-age`. | ✅ | ✅ |
|    | `-j` or `--threads`           | Number of worker threads to use per database. Default=1. | ✅ | ✅ |
|    | `-w`, `--where`           | An additional 'where' expression to restrict the search space. | ✅ | ✅ |
|    | `--conf`, `--run`           | Specify the run and configuration [from a TOML file](how_to_use_with_toml.md). | ✅ | ✅ |
|    | `--no-tracking`           | data-diff sends home anonymous usage data. Use this to disable it. | ✅ | ✅ |
|    | `--bisection-threshold`           | Minimal size of segment to be split. Smaller segments will be downloaded and compared locally. |   | ✅ |
|    | `--bisection-factor`           | Segments per iteration. When set to 2, it performs binary search. |   | ✅ |
|    | `-m`, `--materialize`           | Materialize the diff results into a new table in the database. If a table exists by that name, it will be replaced. Use `%t` in the name to place a timestamp. Example: `-m test_mat_%t` | ✅ |  |
|    | `--assume-unique-key`           | Skip validating the uniqueness of the key column during joindiff, which is costly in non-cloud dbs. | ✅ |  |
|    | `--sample-exclusive-rows`           | Sample several rows that only appear in one of the tables, but not the other. Use with `-s`. | ✅ |  |
|    | `--materialize-all-rows`           | Materialize every row, even if they are the same, instead of just the differing rows. | ✅ |  |
|    | `--table-write-limit`           | Maximum number of rows to write when creating materialized or sample tables, per thread. Default=1000. | ✅ |  |
|    | `-a`, `--algorithm`  | Force algorithm choice. Options: `auto`, `joindiff`, `hashdiff` | ✅ |  |
