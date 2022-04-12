<CustomInput value={'ok'} label={'Priority'} style={{ width: '50px' }} />


<CustomInput
            placeholder={'Search by Username...'}
            value={searchName}
            onChange={e => setSearchName(e.target.value)}
          />


<CustomButton onClick={onClose} className={s.modal_close_button}>
          Close
        </CustomButton>

<CustomButton
        style={{ width: '100px', marginRight: '30px' }}
        onClick={onApply}
    >{t('Apply')}</CustomButton>

<CustomButton
          style={{ width: '100px', marginLeft: '20px' }}
          onClick={() => onSave(params.id)}>
          {t('Save')}
        </CustomButton>    