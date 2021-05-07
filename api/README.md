# prerequired

## Create  SQL Database on Azure

## Create Blog schema

```sql
CREATE SCHEMA Blog;
```

## Create Counter sequence

```sql
CREATE SEQUENCE Blog.Counter
    AS int
    START WITH 1
    INCREMENT BY 1 ;
```

## Save database info into application setting
- `DB_USER`
- `DB_PASS`
- `DB_NAME`
- `DB_SERVER`
