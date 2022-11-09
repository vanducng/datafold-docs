---
sidebar_position: 4
title: Options
---


You can use the following options to specificy the configuration of a data-diff run.

- **Config Key**: Use this syntax when using a [TOML configuration file](./how_to_use_with_toml.md).
```
# Specify the default run parameters
[run.default]
  verbose = true
  stats = true
```

- **CLI Switch**: Use this syntax when writing a [command line input](./how_to_use_with_command_line.md).
```
data-diff DB1_URI TABLE1_NAME DB2_URI TABLE2_NAME --debug --v -k order_id
```


| Config key     | CLI switch                 | Description                                      | Within-Database | Cross-Database |
|-----------------|----------------------------|--------------------------------------------------------------------|---|----|
| `help`          | `--help`                   | Show help message and exit.                                        | ✅ | ✅ |
| `key_columns`  | `-k` or `--key-columns`    | Name of the primary key column. If none provided, default is 'id'. | ✅ | ✅ |
| `update_column` | `-t` or `--update-column`  | Name of updated_at/last_updated column.                            | ✅ | ✅ |
| `columns`      | `-c` or `--columns`        | Names of extra columns to compare.  Can be used more than once in the same command. Accepts a name or a pattern, like in SQL. Example: `-c col% -c another_col -c %foorb.r%` | ✅ | ✅ |
| `limit`   | `-l` or `--limit`           | Maximum number of differences to find (limits maximum bandwidth and runtime). | ✅ | ✅ |
| `stats`   | `-s` or `--stats`           | Print stats instead of a detailed diff. | ✅ | ✅ |
| `debug`   | `-d` or `--debug`           | Print debug info. | ✅ | ✅ |
| `verbose`   | `-v` or `--verbose`           | Print extra info. | ✅ | ✅ |
| `interactive`   | `-i` or `--interactive`           | Confirm queries, implies `--debug` | ✅ | ✅ |
| `json`   | `--json`           | Print JSONL output for machine readability. | ✅ | ✅ |
| `min_age`   | `--min-age`       | Considers only rows older than specified. Useful for specifying replication lag. Example: `--min-age=5min` ignores rows from the last 5 minutes. Valid units: `d, days, h, hours, min, minutes, mon, months, s, seconds, w, weeks, y, years` | ✅ | ✅ |
| `max_age`   | `--max-age`           | Considers only rows younger than specified. See `--min-age`. | ✅ | ✅ |
| `threads`   | `-j` or `--threads`           | Number of worker threads to use per database. Default=1. | ✅ | ✅ |
| `where`   | `-w`, `--where`           | An additional 'where' expression to restrict the search space. | ✅ | ✅ |
| `conf`, `run`   | `--conf`, `--run`           | Specify the run and configuration [from a TOML file](how_to_use_with_toml.md). | ✅ | ✅ |
| `no_tracking`   | `--no-tracking`           | data-diff sends home anonymous usage data. Use this to disable it. | ✅ | ✅ |
| `bisection_threshold`   | `--bisection-threshold`           | Minimal size of segment to be split. Smaller segments will be downloaded and compared locally. |   | ✅ |
| `bisection_factor`   | `--bisection-factor`           | Segments per iteration. When set to 2, it performs binary search. |   | ✅ |
| `materialize`   | `-m`, `--materialize`           | Materialize the diff results into a new table in the database. If a table exists by that name, it will be replaced. Use `%t` in the name to place a timestamp. Example: `-m test_mat_%t` | ✅ |  |
| `assume_unique_key`   | `--assume-unique-key`           | Skip validating the uniqueness of the key column during joindiff, which is costly in non-cloud dbs. | ✅ |  |
| `sample_exclusive_rows`   | `--sample-exclusive-rows`           | Sample several rows that only appear in one of the tables, but not the other. Use with `-s`. | ✅ |  |
| `materialize_all_rows`   | `--materialize-all-rows`           | Materialize every row, even if they are the same, instead of just the differing rows. | ✅ |  |
| `table_write_limit`   | `--table-write-limit`           | Maximum number of rows to write when creating materialized or sample tables, per thread. Default=1000. | ✅ |  |
| `algorithm`   | `-a`, `--algorithm`  | Force algorithm choice. Options: `auto`, `joindiff`, `hashdiff` | ✅ |  |
